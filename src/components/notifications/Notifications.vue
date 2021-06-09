<template>
  <div class="notifications">
    <NotificationsItem
      class="notifications__item-outer"
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    ></NotificationsItem>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationsItem from "@/components/notifications/NotificationsItem.vue";

export default {
  name: "Notifications",
  components: {
    NotificationsItem,
  },

  //   computed: {
  //       name() {
  //           return this.data
  //       }
  //   },

  computed: mapState("notifications", ["notifications"]),
};
</script>

<style lang="scss" scoped>
.notifications {
  z-index: 1000;
  position: fixed;
  right: 1em;
  bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
