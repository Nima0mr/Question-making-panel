import { Model, Collection } from 'js-abstract-model'
import {QuestSubcategoryList} from "@/models/QuestSubcategory";

class QuestCategory extends Model {
    constructor (data) {
        super(data, [
            { key: 'id' },
            { key: 'title' },
            {
                key: 'sub_categories',
                relatedModel: QuestSubcategoryList
            },
            { key: 'order' }
        ])
    }

    getSubcategories(subcategoryList) {
        const thisCategoryId = parseInt(this.id)
        this.sub_categories = new QuestSubcategoryList(subcategoryList.list.filter((item) => {
            return parseInt(item.category_id) === thisCategoryId
        }))
    }
}

class QuestCategoryList extends Collection {
    model () {
        return QuestCategory
    }
}

export { QuestCategory, QuestCategoryList }
