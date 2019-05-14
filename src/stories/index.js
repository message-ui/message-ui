import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TextCard, LinkCard, MarkdownCard, FeedCard, ActionCard } from './dingTalk';

storiesOf('TextCard', module)
  .addDecorator(withKnobs)
  .add('case 1', TextCard);

storiesOf('LinkCard', module)
  .addDecorator(withKnobs)
  .add('case 1', LinkCard);

storiesOf('MarkdownCard', module)
  .addDecorator(withKnobs)
  .add('case 1', MarkdownCard);

storiesOf('FeedCard', module)
  .addDecorator(withKnobs)
  .add('case 1', FeedCard);

storiesOf('ActionCard', module)
  .addDecorator(withKnobs)
  .add('case 1', () => ActionCard({type: 1}))
  .add('case 2', () => ActionCard({type: 2}));
