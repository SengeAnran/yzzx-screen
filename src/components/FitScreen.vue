<script>
import { equalRatioFull, centerFull, none } from '@/utils/resizeScreen';

const displayMap = {
  centerFull,
  equalRatioFull,
  none,
};

export default {
  props: {
    displayType: {
      validator: function (value) {
        return Object.keys(displayMap).indexOf(value) !== -1;
      },
      default: 'centerFull',
    },
    pageSize: {
      type: Object,
      default: () => ({
        width: 1920,
        height: 1080,
      }),
    },
  },
  mounted() {
    const fitScreen = this.fitScreen.bind(this);
    fitScreen();
    window.addEventListener('resize', fitScreen);
    this.$once('hook:beforeDestroy', function () {
      window.removeEventListener('resize', fitScreen);
    });
  },
  methods: {
    fitScreen() {
      displayMap[this.displayType](this.pageSize);
    },
  },
  render() {
    return null;
  },
};
</script>
<style lang="scss">
html, body {
  overflow: hidden;
}
body {
  transform-origin: top left;
}
</style>
