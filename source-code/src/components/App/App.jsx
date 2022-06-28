import { BlogCard, Container, Section, Heading } from 'components';
import article from 'data/article';

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

        <Heading marginTop="50px" textAlign="center">
          Task 2
        </Heading>
      </Container>
    </Section>
  );
};
