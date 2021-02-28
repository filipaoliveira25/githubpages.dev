import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    // grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  .book-title {
    font-weight: bold;
    font-size: 1.2em;
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background: transparent;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: none;
      mix-blend-mode: normal;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const books = [
    // 'The Personal MBA: Master the Art of Business, by Josh Kaufman',
    {title: 'The Personal MBA', author: 'Josh Kaufman', link: 'https://www.goodreads.com/book/show/9512985-the-personal-mba?from_search=true&from_srp=true&qid=9IlUh2duTD&rank=1'},
    // 'Steve Jobs: The Exclusive Biography, by Walter Isaacson',
    {title: 'Steve Jobs', author: 'Walter Isaacson', link: 'https://www.goodreads.com/book/show/11084145-steve-jobs?from_search=true&from_srp=true&qid=7s2Vpvi13Y&rank=1'},
    // 'Never Split the Difference: Negotiating As If Your Life Depended On It, by Chris Voss',
    // {title: 'Never Split the Difference', author: 'Chris Voss', link: 'https://www.goodreads.com/book/show/26156469-never-split-the-difference?ac=1&from_search=true&qid=97eFnUHDyR&rank=1'},
    // 'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution, by Walter Isaacson',
    {title: 'The Innovators', author: 'Walter Isaacson', link: 'https://www.goodreads.com/book/show/21856367-the-innovators?ac=1&from_search=true&qid=EfVxVuOXfi&rank=2r'},
    // {title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', link: 'https://www.goodreads.com/book/show/52037104-rich-dad-poor-dad?ac=1&from_search=true&qid=AoaTxW9goE&rank=5'},
  ];
    
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            {/* <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p> */}
            <p>Hello! I'm Filipa, a future economist from Porto, Portugal.</p>

            {/* <p>I am a very enthusiastic, imaginative and hardworking person, always eager to learn new skills
              and embrace new challenges. 
            </p> */}

            <p>
              I have an engineering background from <a href="https://sigarra.up.pt/feup/en/web_page.inicial" className="inline-link">FEUP</a> { }
              and I am currently broadening my skills by studying Economics and Business Administration
              at <a href="https://sigarra.up.pt/fep/en/web_page.inicial" className="inline-link">FEP</a>.
            </p>


            <p>
              I believe my versatile skill set allows me to get better grasp not only about the business models but also the operational
              part of it.
              Also, I enjoy the interactions in the workplace and I excel at communicating with others and bringing the team together!
            </p>

            <p>
              During my free time, I love reading, cooking and petting my cat, Floki!
            </p>

            <p>Here are some of the books I have been reading recently:</p>
          </div>

          <ul className="skills-list">
            {books && books.map((book, i) =>
              <li key={i}>
                <a href={book.link} className="book-title" target="_blank">{book.title}</a>,
                  by {book.author}
              </li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
