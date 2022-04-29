<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!--     <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" />
    <ManageGoals v-if="selectedComponent === 'ManageGoals'" /> -->
    <!--     <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals #default="slotProps">
      <h2>
        {{ slotProps.item }}
      </h2>
      <p>{{ slotProps.anotherProps }}</p>
    </CourseGoals> -->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
/* import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
 */
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
    /*     BadgeList,
    UserInfo,
    CourseGoals, */
  },
  data() {
    return {
      selectedComponent: "ActiveGoals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
