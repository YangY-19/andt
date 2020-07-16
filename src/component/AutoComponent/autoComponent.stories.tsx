import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AutoComponent from './autoComponent'

const defaultButton = () => {
  const lakers = ['bradley', 'pope', 'abb', 'cook', 'cousins', 'james', 'ess']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query))
  }
  return (
     <AutoComponent fetchSuggestions={handleFetch}/>
  )
}

storiesOf("inputCom组件", module)
  .add("按钮", defaultButton)
