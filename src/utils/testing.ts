export interface TestIdProps {
  testID?: string;
}

export const getTestIdProps = (testID: string | undefined, prefix?: string) => {
  if (!testID) return {};
  return { 'data-test-id': prefix ? `${prefix}.${testID}` : testID };
};
