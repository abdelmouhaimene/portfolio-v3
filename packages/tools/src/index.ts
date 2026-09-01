export function splitStringIntoSentences(text: string  | null): [string, string] {
  if (!text) {
    return ['', ''];
  }

  // Split by period, exclamation, or question mark followed by space
  const sentences = text.match(/[^.!?]+[.!?]/g) || [];

  // If no proper sentence endings found, try splitting by period only
  if (sentences.length === 0) {
    const fallbackSentences = text
      .split('.')
      .filter((s) => s.trim().length > 0);
    if (fallbackSentences.length === 0) {
      // If still nothing, return the whole text as first string
      return [text.trim(), ''];
    }
    // Reconstruct sentences with periods
    const reconstructed = fallbackSentences.map((s) => s.trim() + '.');
    return splitArrayIntoTwo(reconstructed);
  }

  return splitArrayIntoTwo(sentences);
}

function splitArrayIntoTwo(sentences: string[]): [string, string] {
  // If only one sentence, return it and empty string
  if (sentences.length === 1 && sentences[0]) {
    return [sentences[0].trim(), ''];
  }

  // Find the best split point (try to split at half)
  const totalChars = sentences.reduce((sum, s) => sum + s.length, 0);
  const targetLength = totalChars / 2;
  let bestSplit = 1;
  let bestDiff = Infinity;

  for (let i = 1; i < sentences.length; i++) {
    const firstHalfLength = sentences
      .slice(0, i)
      .reduce((sum, s) => sum + s.length, 0);
    const diff = Math.abs(firstHalfLength - targetLength);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestSplit = i;
    }
  }

  const firstHalf = sentences.slice(0, bestSplit).join(' ').trim();
  const secondHalf = sentences.slice(bestSplit).join(' ').trim();

  // Ensure both start with uppercase and end with period
  return [ensureProperFormat(firstHalf), ensureProperFormat(secondHalf)];
}

function ensureProperFormat(sentence: string): string {
  if (!sentence) return '';

  // Trim whitespace
  let formatted = sentence.trim();

  // Ensure it starts with uppercase
  if (formatted.length > 0) {
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  // Ensure it ends with a period
  if (
    formatted.length > 0 &&
    !/[.!?]/.test(formatted.charAt(formatted.length - 1))
  ) {
    formatted += '.';
  }

  return formatted;
}
