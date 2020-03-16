<template>
  <div class="login">
    <HmHeader>登录</HmHeader>

    <HmLogin></HmLogin>

    <HmInput
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></HmInput>
    <HmInput
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></HmInput>

    <HmLoginBtn @fn="fn">登录</HmLoginBtn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    fn() {
      if (!this.$refs.username.validate(this.username)) {
        return;
      }
      if (!this.$refs.password.validate(this.password)) {
        return;
      }

      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res.data);
        if (res.data.statusCode == 200) {
          this.$toast.success('登录成功');
          this.$router.push('/user');
        } else {
          this.$toast.fail('登录失败');
        }
      });
    }
  }
};
</script>

<style></style>
