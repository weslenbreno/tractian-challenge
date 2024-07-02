import { IAsset, ILocation } from "src/models"
import { ITreeItem } from "./AssetTree.types"

export class AssetTree {
    private tree: { [key: string]: ITreeItem } = {}

    constructor(locations: ILocation[] = [], assets: IAsset[] = []) {
        this.buildLocationTree(locations)
        this.buildAssetTree(assets)
    }

    private buildLocationTree(locations: any[]) {
        const parentsObj: { [key: string]: ITreeItem } = {}
        const children: ITreeItem[] = []

        locations.forEach(location => {
            if(location.parentId === null) {
                parentsObj[location.id] = {
                    ...location,
                    type: 'location',
                    children: []
                }
            } else {
                children.push({
                    ...location,
                    type: 'location',
                    children: []
                })
            }
        })
        this.tree = parentsObj

        children.forEach(child => {
            const parent = this.findNodeById(child.parentId!)
            if(parent) {
                parent.children.push(child)
            }
        })
    }

    private findParentNode(node: ITreeItem, parentId: string): ITreeItem | null {
        if(node.id === parentId) {
            return node
        }
        for(let i = 0; i < node.children.length; i++) {
            const found: ITreeItem | null = this.findParentNode(node.children[i], parentId)
            if(found) {
                return found
            }
        }
        return null
    }

    private findNodeById(id: string): ITreeItem | null {
        const keys = Object.getOwnPropertyNames(this.tree)
        for(let key of keys) {
            const found: ITreeItem | null = this.findParentNode(this.tree[key], id)
            if(found) {
                return found
            }
        }
        return null
    }

    buildAssetTree(assets: any[]) {
        assets.forEach(asset => {
            //If the item has a sensorType, it means it is a component. 
            // If it does not have a location or a parentId, it means he is unliked 
            // from any asset or location in the tree.
            if(asset.parentId === null && asset.locationId === null) {
                this.tree[asset.id] = {
                    ...asset,
                    type: 'component',
                    children: []
                }
            // If the item has a location and does not have a sensorId, 
            // it means he is an asset with a location as parent, from the location collection
            } else if(asset.locationId && !asset.sensorId) {
                const parent = this.findNodeById(asset.locationId)
                if(parent) {
                    parent.children.push({
                        ...asset,
                        type: 'asset',
                        children: []
                    })
                }
            //If the item has a parentId and does not have a sensorId, 
            // it means he is an asset with another asset as a parent
            } else if(asset.parentId && !asset.sensorId) {
                const parent = this.findNodeById(asset.parentId)
                if(parent) {
                    parent.children.push({
                        ...asset,
                        type: 'asset',
                        children: []
                    })
                }
            // If the item has a sensorType, it means it is a component. 
            // If it does have a location or a parentId, it means he has an asset or Location as parent
            } else { 
                const parent = this.findNodeById(asset.locationId || asset.parentId!)
                if(parent) {
                    parent.children.push({
                        ...asset,
                        type: 'component',
                        children: []
                    })
                }
            }
        })
    }

    public filterBy(compareFunction: (node: ITreeItem) => boolean): { [key: string]: ITreeItem } {
        const resultTree: { [key: string]: ITreeItem } = {}

        const searchRecursive = (node: ITreeItem): ITreeItem | null => {
            const children: ITreeItem[] = node.children
                .map(child => searchRecursive(child))
                .filter(child => child !== null) as ITreeItem[]

            if (compareFunction(node) || children.length > 0) {
                return {
                    ...node,
                    children
                }
            }

            return null
        }

        const keys = Object.keys(this.tree)
        keys.forEach(key => {
            const resultNode = searchRecursive(this.tree[key])
            if (resultNode) {
                resultTree[key] = resultNode
            }
        })

        return resultTree
    }

    public search(term?: string): { [key: string]: ITreeItem } {
        if(!term) return this.tree

        const compareFunction = (node: ITreeItem) => {
            return node.name.toLowerCase().includes(term!.toLowerCase())
        }

        return this.filterBy(compareFunction)
    }

    public getNodes() {
        return this.tree
    }
}