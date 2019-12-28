import { scrapComponent } from './src/scrap.component';

scrapComponent('모니터')
  .then(value => console.log(value))
  .catch(err => console.log(err))
  .finally(() => process.exit(0));
