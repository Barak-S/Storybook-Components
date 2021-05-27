import { View } from 'components/Common';
import { EventsListItem } from 'components/Event';
import React, { FC, useEffect } from 'react';
import { useSelector, useStoreManager } from 'store';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardEventsListScene: FC<Props> = () => {
  const manager = useStoreManager();
  const items = useSelector(s => s.events.items);
  const themes = useSelector(s => s.events.themes);

  useEffect(() => {
    manager.events.updateItems();
    manager.events.updateThemes();
  }, []);

  return (
    <View>
      {items.map(item => (
        <EventsListItem key={item.id} item={item} theme={themes.find(itm => itm.id === item.themeId)} />
      ))}
    </View>
  );
};

export type DashboardEventsListSceneProps = Props;
export default DashboardEventsListScene;
