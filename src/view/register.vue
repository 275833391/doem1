<template>
  <div class="container register">
      <form>
        <div class="form-group">
          <label for="">用户名</label>
          <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="form-group">
          <label for="">密码</label>  
          <input type="password" class="form-control" name="" id="" placeholder="">
        </div>
        <div class="form-group">
          <label for="">重复密码</label>
          <input type="password" class="form-control" name="" id="" placeholder="">
        </div>
        <div class="form-group">
          <label for="">邮箱</label>
          <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
          <small id="emailHelpId" class="form-text text-muted">Help text</small>
        </div>
        <button type="submit" class="btn btn-primary">注册</button>
      </form>
    
  </div>

</template>
<style scoped>
    .register {
        margin-top: 50px
    }
</style>