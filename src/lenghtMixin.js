export const lengthMixin = {
    computed: {
        length() {
            return this.text2 + ' (' + this.text2.length + ')';
        }
    }
};
