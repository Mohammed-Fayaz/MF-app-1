declare module 'app2/*';

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
