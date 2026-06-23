 const customMeta = {
    tags: true, // 是否显示标签
    /**
     * 是否显示创建时间，或设置时间格式
     * - 'short': 显示为 `2022-01-01`，默认
     * - true ：确认开启
     * - 'long': 显示为 `2022-01-01 00:00:00`
     */
    createTime: true, // boolean | 'short' | 'long'
    readingTime: true, // 是否显示阅读时间估算
    wordCount: true, // 是否显示字数统计
} 

export default customMeta