/*
 * Silex website builder, free/libre no-code tool for makers.
 * Copyright (c) 2023 lexoyo and Silex Labs foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { getEditor, getEditorConfig } from './grapesjs'
import { Editor, EditorConfig, Page } from 'grapesjs'
import { SettingsSection } from './grapesjs/settings-sections'
import { addSection, removeSection } from './grapesjs/settings'

/**
 * @fileoverview Silex client side config
 */

export class ClientConfig {
  
  /**
   * root url of Silex app
   */
  rootUrl = window.location.origin + window.location.pathname.replace(/\/$/, '')

  /**
   * debug mode
   */
  debug = false

  /**
   * Grapesjs config
   */
  grapesJsConfig: EditorConfig = {
    plugins: [],
    pluginsOpts: {},
  }

  /**
   * Init GrapesJS config which depend on the config file properties
   */
  initGrapesConfig() {
    // Get the initial config
    const config = getEditorConfig()

    // Merge with the config modified by plugins
    this.grapesJsConfig = {
      ...this.grapesJsConfig,
      ...config,
      plugins: [
        ...this.grapesJsConfig.plugins,
        ...config.plugins,
      ],
      pluginsOpts: {
        ...this.grapesJsConfig.pluginsOpts,
        ...config.pluginsOpts,
      },
    }
  }

  /**
   * Get grapesjs editor
   */
  getEditor(): Editor {
    return getEditor()
  }

  /**
   * Add a section to the settings dialog
   */
  addSettings(section: SettingsSection, siteOrPage: 'site' | 'page', position: 'first' | 'last' | number = 'last') {
    addSection(section, siteOrPage, position)
  }

  /**
   * Remove a section from the settings dialog
   */
  removeSettings(id: string, siteOrPage: 'site' | 'page') {
    removeSection(id, siteOrPage)
  }
}
