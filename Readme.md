```javascript
import { numToWord, wordToNum } from 'word-number';
numToWord(3) // Three
wordToNum('Two') // 2
```

```javascript
const wordNum = require('word-number');
wordNum.numToWord(3); // Three
wordNum.wordToNum('Two'); // 2
```

```html
<script src=""></script>
<script>
  /* webpackNumbers 是一个全局变量 */
  wordNum.wordToNum('Five') //输出 5
</script>
```