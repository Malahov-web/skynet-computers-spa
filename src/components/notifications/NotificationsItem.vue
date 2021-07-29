<template>
  <div class="notifications__item" :class="notificationTypeClass">
    <a href="#" class="product__remove" @click="removeNotification">
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

  mounted() {
    this.timeout = setTimeout(
      () => this.removeNotification(this.notification),
      5000
    );
  },

  computed: {
    notificationType() {
      return this.notification.notification.type;
    },
    notificationTypeClass() {
      //   return `-text-${this.notification.type}`;
      return `status-${this.notificationType}`;
    },
  },

  methods: {
    removeNotification() {
      //   this.notification
      // delete
      // dispatch('notifications/add', notification, { root: true } );
      this.$store.dispatch("notifications/delete", this.notification);
    },
  },
};
</script>

<style lang="scss" scoped>
.notifications__item {
  display: flex;
  align-items: flex-start;

  margin-top: 1em;
  padding: 1em 1.5em;
  background-color: #fff;
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: transparent;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  span {
    margin-bottom: 0.25em;
    display: block;
    font-weight: 500;
  }
  .product__remove {
    min-width: 14px;
    margin-right: 14px;
  }
}
</style>
