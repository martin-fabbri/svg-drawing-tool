
{/*<text dy=".71em" y="9" x="0" style="text-anchor: middle;">*/}
    {/*<tspan x="0" y="9" dy="0.71em">Committed 671</tspan>*/}
    {/*<tspan x="0" y="9" dy="1.81em">birthdays to</tspan>*/}
    {/*<tspan x="0" y="9" dy="2.91em">memory</tspan>*/}
{/*</text>*/}

// const svgTextWrap = () => {
//
// };
//
// export default svgTextWrap;



// import textWrap from 'svg-text-wrap'
//
// const text = "A really long string that you probably want to make fit"
// const textArray = textWrap(text, 100, { 'letter-spacing': '1px' })
//
// // textArray will look something like
// // [
// //   "A really long string",
// //   "that you probably",
// //   "want to make fit"
// // ]

// import textSize from 'svg-text-size'
//
// const dimensions = textSize("A string", { 'letter-spacing': '1px' })
// // dimensions will look something like { width: 50, height: 12 }
//
// const labelDimensions = textSize(["Or maybe you want", "a wrapping label"])
// // dimensions will look something like { width: 50, height: 24 }

// const ns = 'http://www.w3.org/2000/svg';
// const makeSvgNode = (name, doc) => doc.createElementNS(ns, name);
//
// const makeTextSpanNode = (text, dy, doc) => {
//     const node = doc.createTextNode(text);
//     const span = makeSvgNode('tspan', doc);
//     span.setAttribute('x', 0);
//     span.setAttribute('y', 0);
//     span.setAttribute('dy', dy);
//     span.appendChild(node);
//     return span;
// };
//
// const makeTextNode = (texts, attrs = {}, doc) => {
//     const node = makeSvgNode('text', doc);
//     node.setAttribute('x', 0);
//     node.setAttribute('y', 0);
//     for (let attr in attrs) { node.setAttribute(attr, attrs[attr]); }
//     texts.forEach((t, i) => node.appendChild(makeTextSpanNode(t, `${i}em`, doc)));
//     return node;
// };
//
// // Takes a string, or array of strings, some svg attrs, and gives you back a
// // {width, height} of the resulting svg box containing the strings.
// const svgTextSize = (texts, attrs, doc = document) => {
//     const textArr = (texts.constructor === Array) ? texts : [texts];
//     const svg = makeSvgNode('svg', doc);
//     const textNode = makeTextNode(textArr, attrs, doc);
//     svg.appendChild(textNode);
//     doc.body.appendChild(svg);
//     const {width, height} = textNode.getBBox();
//     doc.body.removeChild(svg);
//     return {width, height};
// };
//
// export default svgTextSize;


// import svgTextSize from 'svg-text-size';

// Takes a string, and a width (and svg attrs, if they apply), and returns
// an array of lines, representing the break points in the string.
// const svgTextWrap = (text, width, attrs, doc = document) => {
//     const words = text.split(/\s+/);
//     let lines = [];
//     let currentLine = [];
//     words.forEach(word => {
//         const newLine = [...currentLine, word];
//         const size = svgTextSize(newLine.join(' '), attrs, doc);
//         if (size.width > width) {
//             lines.push(currentLine.join(' '));
//             currentLine = [word];
//         } else {
//             currentLine.push(word);
//         }
//     });
//     lines.push(currentLine.join(' '));
//     if (lines[0] === '') { lines.shift(); }
//     return lines;
// };
//
// export default svgTextWrap;