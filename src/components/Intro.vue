<template>
  <div>
    <h1>{{interval$}}</h1>
    <h1>{{random$}}</h1>
    <button class="button" v-stream:click="click$">Cick</button>
  </div>
</template>

<script>
import { Observable } from 'rxjs'

export default {
  name: 'Intro',
  domStreams: ['click$'],
  subscriptions() {
    const interval$ = Observable.interval(1000)
    // eslint-disable-next-line
    const random$ = this.click$.map(x => Math.random())
    return {
      interval$,
      random$
    }
  }
}
</script>

<style>

</style>
