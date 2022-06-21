import * as React from "react";

import { chapters, contacts } from "../data";
import {
  Activity,
  Chapter,
  Columns,
  Contact,
  Layout,
  PageSubtitle,
  PageTitle,
  Photo,
  SpacedHorizontal,
} from "../components";

import photo from "../images/photo.jpg";

import "../styles/index.css";

const IndexPage = () => {
  return (
    <Layout>
      <title>Maksim Andreev CV</title>

      <Columns
        left={<Photo alt="My face" src={photo} />}
        right={
          <SpacedHorizontal>
            <header>
              <PageTitle>
                Maksim
                <br />
                Andreev
              </PageTitle>
              <PageSubtitle>Frontend developer</PageSubtitle>
            </header>
            <address>
              {contacts.map(({ href, icon, title }, index) => (
                <Contact href={href} icon={icon} title={title} key={index} />
              ))}
            </address>
          </SpacedHorizontal>
        }
      />

      <main>
        <section>
          <Columns
            right={
              <p>
                I am a frontend web developer with main stack of React and
                TypeScript, but I have experience working with other
                technologies. Currently I work in one of the largest social
                networking services in the world — VK.com as a frontend
                developer in the e-commerce department. Previously I worked in a
                fully remote company headquartered in Singapore, CSSSR, which
                specialises in modern stack and solves the problems of fintech
                corporations.
              </p>
            }
          />
        </section>

        {chapters.map(({ activities, title }, index) => (
          <Chapter title={title} key={index}>
            {activities.map(
              (
                { company, description, href, period, position, skills },
                index
              ) => (
                <Activity
                  company={company}
                  description={description}
                  href={href}
                  period={period}
                  position={position}
                  skills={skills}
                  key={index}
                />
              )
            )}
          </Chapter>
        ))}
      </main>
    </Layout>
  );
};

export default IndexPage;
