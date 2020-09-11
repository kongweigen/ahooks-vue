import { BasicTarget, getTargetElement } from '../../utils/dom';
import useBoolean from '../useBoolean';
import { onMounted } from '@vue/composition-api';
import 'intersection-observer';

function isInViewPort(el: HTMLElement): boolean {
  if (!el) {
    return false;
  }

  const viewPortWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const rect = el.getBoundingClientRect();

  if (rect) {
    const { top, bottom, left, right } = rect;
    return (
      bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0
    );
  }

  return false;
}

export function useInViewport(target: BasicTarget) {
  const { state } = useBoolean(false);

  onMounted(() => {
    const targetElement = getTargetElement(target);
    if (!targetElement) {
      return;
    }
    const defaultInViewport = isInViewPort(targetElement as HTMLElement);
    state.value = defaultInViewport;

    const observer = new IntersectionObserver(entries => {
      const isIntersecting = entries.every(i => i.isIntersecting);
      state.value = isIntersecting;
    });

    observer.observe(targetElement as HTMLElement);

    onMounted(() => {
      observer.disconnect();
    });
  });

  return state;
}
