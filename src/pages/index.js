import Page from './Page';
import Home from './Home';
import Exercises from './Exercises';
import WordAdditionPanel from './wordAdditionPanel/WordAdditionPanel';
import NotFound from './NotFound';

/**
 * @todo: 
 *  1) Define Pages
 */

const pages = {
  home: {
    title: "My words",
    component: Home
  },
  exercises: {
    title: "Exercises",
    component: Exercises
  },
  wordAddition: {
    title: "Word Addition Panel",
    component: WordAdditionPanel
  },
  notFound: {
    title: "Page not found",
    component: NotFound
  }
};

export default new Proxy(pages, {
  get(target, prop) {
    const title = target[prop].title;
    const Component = target[prop].component;

    return <Page title={title}>{<Component />}</Page>
  }
});