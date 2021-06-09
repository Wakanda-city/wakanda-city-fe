export default class UrlBuilderUtil {
    static replacePathVariable(url: string, path: string, content: string) {
        return url.replace(path, content);
    }
}