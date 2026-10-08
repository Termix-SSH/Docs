/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/DocItem/Content";

import SupportFooter from "@site/src/components/SupportFooter";
import PluginHeader from "@site/src/components/plugins/PluginHeader";
import PluginCatalog from "@site/src/components/plugins/PluginCatalog";
import { findPlugin } from "@site/src/components/plugins/data";

interface TermixFrontMatter {
  hide_title?: boolean;
  hide_support?: boolean;
  catalog?: boolean;
  plugin_id?: string;
  plugin_version?: string;
  sidebar_position?: number;
}

function useSyntheticTitle(): string | null {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  return shouldRender ? metadata.title : null;
}

export default function DocItemContent({ children }: Props): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  const frontMatter = useDoc().frontMatter as TermixFrontMatter;

  if (frontMatter.catalog) return <PluginCatalog />;

  const pluginId = frontMatter.plugin_id;
  const plugin = pluginId ? findPlugin(pluginId) : undefined;
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {pluginId && (
        <PluginHeader
          id={pluginId}
          version={frontMatter.plugin_version ?? ""}
          overview={frontMatter.sidebar_position === 0}
        />
      )}
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
      {!frontMatter.hide_support && (
        <SupportFooter repository={plugin?.repository} />
      )}
    </div>
  );
}
