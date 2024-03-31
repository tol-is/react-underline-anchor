import { Code } from '../code';
import { AnchorUnderline } from '../anchor-underline';

import styles from './styles.module.css';

const nav = ['React', 'Typescript', 'HTML', 'CSS', 'Animation', 'Underline', 'Navigation'];

const code = `
.custom_link {
  --underline-position-y: 62%;
  --underline-duration: 0.3s;
  --underline-size: 2px;
}
<AnchorUnderline className="custom_link"/>
`;

export const App = () => {
  return (
    <main className={styles.main}>
      <p>
        <AnchorUnderline href="https://github.com/tol-is/react-underline-anchor">
          https://github.com/tol-is/react-underline-anchor
        </AnchorUnderline>
      </p>
      <p>A wonderfully over-engineered recipe of an animated underline anchor.</p>

      <p>
        The <AnchorUnderline href="#">underline</AnchorUnderline> color, weight, position and pace
        can be configured using custom CSS properties, and can be fine-tuned, for every custom
        use-case.{' '}
        <AnchorUnderline href="#">
          Its implemented using background-image, so both the underline and transition, will work
          beautifully, with single-line, or multi-line text, for anchors within long format
          paragraphs, or standalone navigation links. Is that long enough now?{' '}
        </AnchorUnderline>{' '}
        Internally the component, is{' '}
        <AnchorUnderline href="#">
          using the length of the text contents, to compute the animation duration,
        </AnchorUnderline>{' '}
        so the underline transition of longer text would take longer and shorter text would animate
        faster, to ensure that the animation feels reasonably{' '}
        <AnchorUnderline href="#">consistent across different text lengths</AnchorUnderline>.
      </p>

      <ul className={styles.nav_list}>
        {nav.map((item, index) => (
          <li key={index}>
            <AnchorUnderline href="#">{item}</AnchorUnderline>
          </li>
        ))}
      </ul>

      <Code code={code} language="js" />
    </main>
  );
};
