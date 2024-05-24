import React from 'react';
import Icon, {IconTypes} from '@components/Icon/Icon';
import {Colors} from '@themes/index';
import {moderateScale} from '@utils/sizes';

export interface TabBarIconProps {
  /**
   * The type of the icon.
   */
  types: IconTypes;

  /**
   * The name of the icon.
   */
  name: string;

  /**
   * The color of the icon.
   */
  colors?: string;

  /**
   * The custom size for icon.
   */
  size?: number;
}

/**
 * Creates a tab bar icon component.
 * Unable to create interface as its required to have a 3 arguments
 *
 * @author {Sam}
 * @type {Component}
 * @returns {React.FC}
 */

const TabBarIcon = (props: TabBarIconProps) => {
  const {name, types, colors, size} = props;
  return (
    <Icon
      type={types}
      icon={name}
      size={moderateScale(size || 25)}
      color={colors ? colors : Colors.black}
    />
  );
};

export default TabBarIcon;
