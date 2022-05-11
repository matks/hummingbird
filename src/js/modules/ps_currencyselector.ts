/**
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const initCurrencySelector = () => {
  const {Theme} = window;
  const {currencySelector: CurrencySelectorMap} = Theme.selectors;
  const languageSelector = document.querySelector<HTMLElement>(CurrencySelectorMap.currencySelector);

  languageSelector?.addEventListener('change', (event) => {
    const option = event.target as HTMLOptionElement;

    window.location.href = option.value;
  });
};

export default initCurrencySelector;
