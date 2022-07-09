import { Container, Header, SearchForm, Section, TodoList } from 'components';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
