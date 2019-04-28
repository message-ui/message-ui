import React from 'react';

import { storiesOf } from '@storybook/react';
import TextCard from '../components/dingtalk/TextCard';

storiesOf('TextCard', module)
  .add('with content', () => <TextCard content="这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。
  而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？" />);
