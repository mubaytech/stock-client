const {src, dest, task} = require('gulp');
const es = require('event-stream');
const PluginError = require('plugin-error');
const rimraf = require('rimraf');
const camelize = function (str) {
  let arr = str.split('-');
  let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
  // ^-- change here.
  let capitalString = capital.join("");
  return capitalString;
  // console.log(capitalString);
}
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
const stream = function (injectMethod) {
  return es.map(function (file, cb) {
    try {
      file.contents = new Buffer(injectMethod({
        name: file.path.replace(/^.*[\\\/]/, ''),
        content: String(file.contents)
      }));
    } catch (err) {
      return cb(new PluginError('gulp-inject-string', err));
    }
    cb(null, file);
  });
};


task('ionic-icons', function (done) {
  rimraf.sync('./src/generated-icons/ionic/test');
  src('src/generated-icons/ionic/build/*.ts')
    .pipe(
      stream(function (file) {

        const selector = String(file.name.replace('.icon', '')).replace('.ts', '');
        const name = String(camelize(selector));

        if (selector === 'Ionicon.model') {
          return String(file.content)
            .replace('type Ionicon', 'type IoniconName')
            .replace('name: Ionicon', 'name: IoniconName');
        }
        return `
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

${file.content}

@Component({
    selector: 'app-${selector.toLowerCase()}',
    template: \`
    <div class="app-ionic-icon">
        \${${capitalize(name)}.data}
    </div>
    \`,
    styles: [\`
    :host{
        display: block;
        color: inherit;
        font-size: inherit;
    }
    svg{
        width: 1em;
        height: 1em;
        contain: strict;
        fill: currentcolor;
        box-sizing: content-box !important;
        font-size: inherit;
        line-height: inherit;
        pointer-events: none;
    }
    .ionicon-stroke-width {
        stroke-width: 32px;
    }
    .ionicon-fill-none {
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 48;
        fill: none;
        stroke: currentColor;
    }\n
    \`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${capitalize(name)}Component{}

@NgModule({
    declarations: [${capitalize(name)}Component],
    imports: [
        CommonModule
    ],
    exports: [
        ${capitalize(name)}Component
    ],
})
export class ${capitalize(name)}Module {
}\n`.replace('__ionicon-stroke-width', ' ionicon-stroke-width ').replace('__ionicon-fill-none', ' ionicon-fill-none ');
      }),
    ).pipe(dest('src/generated-icons/ionic/build'));
  done();
});
