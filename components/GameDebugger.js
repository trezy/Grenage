// Module imports
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs'
import React from 'react'





// Local imports
import {
  InventoryDebugPanel,
  PlayerDebugPanel,
  SpritesDebugPanel,
  StatsDebugPanel,
  WireframesDebugPanel,
} from './DebugPanels'





class GameDebugger extends React.Component {
  render () {
    return (
      <Tabs className="game-debugger">
        <TabList>
          <Tab>Stats</Tab>

          <Tab>Player</Tab>

          <Tab>Inventory</Tab>

          <Tab>Sprites</Tab>

          <Tab>Wireframes</Tab>
        </TabList>

        <TabPanel>
          <StatsDebugPanel />
        </TabPanel>

        <TabPanel>
          <PlayerDebugPanel />
        </TabPanel>

        <TabPanel>
          <InventoryDebugPanel />
        </TabPanel>

        <TabPanel>
          <SpritesDebugPanel />
        </TabPanel>

        <TabPanel>
          <WireframesDebugPanel />
        </TabPanel>
      </Tabs>
    )
  }
}





export { GameDebugger }
