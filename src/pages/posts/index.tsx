import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../../services/apollo-client';
import styles from './styles.module.scss';

type Publications = {
  edges: [{
      node: {
        _meta: { uid: string },
      title: [{
        text: string
      }]
      content: [{
        text: string
      }]
    }
  }]
}

type HomeProps = {
  publications?: Publications
}

export default function Posts({ publications }: HomeProps) {
  return (
    <>
      <Head>
        <title>Posts | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {publications && publications.edges.map((post) => (
             <a href="#">
             <time>12 de março de 2021</time>
             <strong>{post.node.title[0].text}</strong>
              <p>{post.node.content.at(1).text} ...</p>
           </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        allPublications {
          edges {
            node {
              _meta {
                uid
              }
              title
              content
              _linkType
            }
          }
          totalCount
        }
      }
    `,
  });

  console.log(data.allPublications);

  return {
    props: {
      publications: data.allPublications,
    },
 };
}