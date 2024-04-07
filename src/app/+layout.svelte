<script>
  import './styles/global.css';
  import { Header } from '@/widgets/header';
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
</div>
