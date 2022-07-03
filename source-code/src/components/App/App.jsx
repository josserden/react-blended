import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header, Section, Container } from 'components';
import { Gallery, Users } from 'tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>Gallery</Tab>
              <Tab>Users</Tab>
            </TabList>

            <TabPanel>
              <Gallery />
            </TabPanel>
            <TabPanel>{/* <Users /> */}</TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
