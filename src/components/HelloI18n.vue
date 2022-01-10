<template>
  <p>{{ $t('message') }}</p>
</template>

<script>
export default {
  name: 'HelloI18n',
  mounted() {
    console.log(this.$i18n.locale)
  }
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
