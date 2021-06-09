<template>
  <div class="notifications__item" :class="notificationTypeClass">
    <a href="#" class="product__remove">
      <i class="themify themify-close"></i>
    </a>
    <div class="notifications__item-content">
      <span> {{ notification.notification.type.toUpperCase() + ":" }} </span>
      {{ notification.notification.object }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationsItem",

  props: {
    notification: {
      type: Object,
      required: true,
    },
  },

  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.notifications__item {
  margin-top: 1em;
  padding: 1em 1.5em;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  span {
    margin-bottom: 0.25em;
    display: block;
    font-weight: 500;
  }
  .product__remove {
  }
}
</style>
