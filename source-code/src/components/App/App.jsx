import { BlogCard, Container, Section, Heading, ForbesList } from 'components';
import article from 'data/article';
import forbes from 'data/forbes';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          name={article.name}
          tag={article.tag}
          poster={article.poster}
          postedAt={article.postedAt}
          avatar={article.avatar}
          title={article.title}
          description={article.description}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes} />
      </Container>
    </Section>
  );
};
