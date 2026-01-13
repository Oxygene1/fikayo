/**
 * Simple className combiner used in place of '@/lib/utils'.
 * Accepts strings and falsy values and joins truthy class names.
 */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
