<template>
  <div class="account-user container-settings">
    <div class="settings__section">
      <h2>Avatar</h2>
      <div class="placeholder-block"></div>

      <h2>Company Name And Email</h2>
      <simple-input
        placeholder="Company Name"
        icon="copyright"
        />
      <simple-input
        placeholder="you@your-email.com"
        icon="envelope-o"
        />

      <h2>Change Password</h2>
      <simple-input
        placeholder="New Password"
        icon="lock"
        />
      <simple-input
        placeholder="New Password (again)"
        icon="lock"
        />

      <h2>Reply-To Email</h2>
      <simple-input
        placeholder="you@your-email.com"
        icon="envelope-o"
        />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

</style>
