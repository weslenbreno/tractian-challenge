import { useAssetsTree } from "src/hooks";
import { useCallback, useMemo } from "react";
import { ITreeItem } from "src/services";
import { TreeItem } from "./components";
import { NotFoundText, TreeViewContainer, TreeViewNode } from "./styles";
import { useAppStore } from "src/store";

export function TreeView() {
    const tree = useAssetsTree();
    const { filters } = useAppStore();

    const compareFiltersFns = useMemo(() => ({
        name: (node: ITreeItem) => {
            return node.name.toLowerCase().includes(filters.name!.toLowerCase());
        },
        sensorType: (node: ITreeItem) => {
            return node.sensorType === filters.sensorType;
        },
        status: (node: ITreeItem) => {
            return node.status === filters.status;
        },
    }), [filters]);

    const buildCompareFnFromFilters = useCallback(() => {
        return Object.entries(filters).map(([key, value]) =>
            value ? compareFiltersFns[key as keyof typeof compareFiltersFns] : null
        ).filter((fn) => fn)
            .reduce((acc: (node: ITreeItem) => boolean, fn: any) => {
                return (node: ITreeItem) => acc(node) && fn(node);
            }, () => true);
    }, [filters]);

    function buildChildren(node: ITreeItem) {
        if (node.children.length === 0) {
            return null;
        }
        return (
            <TreeViewNode>
                {node.children.map((child) => (
                    <TreeItem item={child} childrenList={buildChildren(child)} />
                ))}
            </TreeViewNode>
        );
    }

    const buildTreeView = useCallback(() => {
        const compareFn = buildCompareFnFromFilters();
        const nodes = Object.values(tree.filterBy(compareFn));

        if (nodes.length === 0) {
            return <NotFoundText>Nenhum resultado encontrado</NotFoundText>;
        }

        return (
            <TreeViewContainer>
                {nodes.map((item) => (
                    <TreeItem item={item} childrenList={buildChildren(item)} />
                ))}
            </TreeViewContainer>
        );
    }, [tree]);

    return buildTreeView();
}
