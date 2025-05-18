# Logos for Reveal.js

A simple plugin for Reveal.js that allows you to your logos to your presentation.

## Installation

To install the plugin, the `logo.js` file need to be added to the presentation. The plugin can be installed via NPM, JSDelivr CDN, or manually.

### NPM (Recommended)

#### 1. Install the plugin.

```bash
npm install revealjs-logo
```

#### 2. Add the source files to the presentation and initialize the plugin.

In the HEAD

```html
<head>
  ...
  <link rel="stylesheet" href="dist/reveal.css" />
  <link rel="stylesheet" href="dist/theme/black.css" />
  <!-- START: The plugin -->
  <script src="node_modules/revealjs-logo/logo/logo.js"></script>
  <!-- END: The plugin -->
  ...
</head>
```

> Note: Add the plugin to the list of plugins and configure it as described in the [Usage](#usage) section.

### JSDelivr CND (Easiest)

#### 1. Add the source files to the presentation and initialize the plugin.

In the HEAD

```html
<script src="https://cdn.jsdelivr.net/npm/revealjs-logo@latest/logo/logo.js"></script>
```

> Note: Add the plugin to the list of plugins and configure it as described in the [Usage](#usage) section.

### Manual

### 1. Copy the `logo/logo.js` file to the `plugin/mediaList/mediaList` folder of your reveal.js presentation.

```bash
mkdir -p <path-to-revealjs>/plugin/logo/
cp logo/logo.js <path-to-revealjs>/plugin/logo/
```

### 2. Add the source files to the presentation and initialize the plugin.

In the HEAD

```html
<head>
  ...
  <script src="plugin/logo/logo.js"></script>
  ...
</head>
```

> Note: Add the plugin to the list of plugins and configure it as described in the [Usage](#usage) section.

## Usage

After installing the plugin, you need to add the plugin to the list of plugins and configure it.

1. Add the plugin to the list of plugins (`RevealLogo,`).
2. Add the configuration for the plugin (`logo`).

### 1. Add the plugin to the list of plugins

```html
<body>
  ...
  <script>
    Reveal.initialize({
      hash: true,
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealLogo],
    });
  </script>
</body>
```

### 2. Add the configuration for the plugin

```html
<body>
  ...
  <script>
    Reveal.initialize({
      hash: true,
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealLogo],
      logo: {
        show_on_all: true,
        layout: 'horizontal', // or 'vertical'
        logos: {
          logo1: {
            src: 'assets/logo1.svg',
            width: '100px',
            style: { filter: 'invert(1)' },
          },
          logo2: {
            src: 'assets/logo2.svg',
            width: '100px',
          },
        },
      },
    });
  </script>
</body>
```
