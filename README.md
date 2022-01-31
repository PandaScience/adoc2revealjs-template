# Reveal.js Presentations from Asciidoctor Code [Template]

## Prerequisites

Get the Asciidoctor reveal.js converter using one of the technology stacks
described on the [official page](https://docs.asciidoctor.org/reveal.js-converter/latest/).

Go for the latest **stable release version** (currently: v4.1.0-rc.5), which can
utilize **reveal.js 3.9.2**. The easiest way is to download the pre-built binary
from [github](https://github.com/asciidoctor/asciidoctor-reveal.js/releases)).


## Getting Started

Have a look at the template.adoc. It introduces you into the special syntax of
this converter and provides hints on how to use some of the fancy reveal.js
plugins bundled with this repo-template.

In order to use this template for your own presentation, create a new git
repository and run for example

```bash
git add submodule https://git.scandio.de/scm/~rwirnata/adoc2revealjs-template.git framework
git submodule update --init --recursive
```

Now you can copy the template or start a `presentation.adoc` from scratch. Just
make sure you set/adapt the following options properly:

1. Paths to plugin files in your new `*.adoc`
```
:revealjs_plugins: plugins.js
:revealjs_plugins_configuration: plugins-conf.js
```
2. Relative plugin paths in `plugin.js`
3. Name of the `*.adoc` in `converter`

