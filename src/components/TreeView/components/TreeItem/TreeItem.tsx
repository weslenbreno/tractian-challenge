import { useState } from "react";
import { Collapsible, TreeViewNodeItem, TreeViewNodeName } from "./styles";
import { useAppStore } from "src/store";
import { getAssetIcon, getStatusIcon} from "src/ultils";
import Arrow from 'src/assets/icons/arrow.svg?react';

import { useShallow } from "zustand/react/shallow";
import { ITreeItem } from "src/services";
import { TreeViewNode } from "../../styles";

type TreeItemProps = {
    childrenList: React.ReactNode | null;
    item: ITreeItem;
}

export function TreeItem({ childrenList, item }: TreeItemProps) {
    const [collapse, setCollapse] = useState(true);
    const { activeAsset, setActiveAsset } = useAppStore(
        useShallow(state => ({
            activeAsset: state.activeAsset,
            setActiveAsset: state.setActiveAsset
        })))

    function onClickItem() {
        setCollapse(!collapse)
        setActiveAsset(item)
    }

    return (
        <TreeViewNode>
            <TreeViewNodeItem onClick={onClickItem}>
                {item.children.length > 0 && (
                    <Arrow style={{ transform: collapse ? 'rotate(-90deg)' : 'rotate(0deg)' }} />
                )}
                {getAssetIcon(item.type)}
                <TreeViewNodeName active={activeAsset?.id === item.id}>
                    {item.name}
                    {getStatusIcon(item)}
                </TreeViewNodeName>
            </TreeViewNodeItem>
            <Collapsible collapse={collapse}>
                {childrenList}
            </Collapsible>
        </TreeViewNode>
    );
}
