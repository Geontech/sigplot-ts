# SigPlot TypeScript Integration Library

This library aims to simplify integration with [SigPlot][sigplot] by adding additional Typings, classes, enumerations, and interfaces to the existing basic Typings support.  The library is distributed as ES5 and ES6 modules, making it useful for developers using other languages as well.

At this time, the two plot types are Line and (Falling) Raster.  These correspond to Type 1000 and 2000 (1D and 2D, respectively).  An abstract base class (`BasePlot`) is also provided in the event your application needs other features.

 > **Important:** At this time, this library [uses a fork][sigplot-fork] of [SigPlot][sigplot] that has basic typings support in the 2.0 development branch.

## Installation

Install this library for your project using `npm`:

```bash
npm install --save sigplot-ts
```

## Usage

In your TypeScript environment, import and utilize the plot type of interest:

```typescript
import { RasterPlot } from 'sigplot-ts';

let plot = new RasterPlot(dom_element);

plot.push(data_vector, ...);
```

 > **Important:** Your HTML `dom_element` must have a non-zero height set, otherwise SigPlot will not be displayed at all.  Once this is set, call `checkResize` on the plot instance to refresh the plot to the new dimensions.

### Construction Options and Runtime Settings

The `sigplot.Plot` interface supports a variety of options, some of which an only be set when the plot is created.  The `ConstructorOptions` class is provided to simplify that interface.  Once the plot is instantiated, one can use the `settings` member to access the runtime subset of those options and force an update using `checkSettings`:

```typescript
plot.settings.legend = false; // hide the legend
plot.checkSettings();
```

**X and Y Axis Labels**

The default construction options structure maps the X and Y label, via function, to the `xlab` and `ylab` members, which can be set to an enumeration (`Units`, corresponding to `sigplot.m.UNITS`).  The default function uses the enumeration to produce a string value like `Amplitude`.  The base plot class exposes these two members directly in the event one would like to update the X and Y labels at runtime:

```typescript
import { Units } from 'sigplot-ts';

// Somewhere below
this.plot.xlab = Units.Power; // Results in an X label of 'Power'
```

The relationship is that the enumeration name, as a string, becomes the corresponding label text (if shown).


## Advanced Usage

If you find that the interfaces exposed by your selected `sigplot-ts` plot do not expose the feature you want, you can access the underlying `sigplot.Plot` instance at the class's `_plot` member.  

Such usage _is discouraged_, and users interested in doing so are _encouraged_ to see [SigPlot][sigplot] for more information since those interface and configuration descriptions are not maintained in this library.


--------
[sigplot]: https://github.com/LGSInnovations/sigplot
[sigplot-fork]: https://github.com/geontech/sigplot