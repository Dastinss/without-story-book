export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED' // выносим в отдельную контстанту то, что используется >2 раз и больше, чтобі избежать опечатки

type ActionType = {
    type: string // action это объект у которого обязателно должно быть св=во тип (надпись "удалить", "уволить", "выучить")
}

export type StateType = {
    collapsed : boolean
}

export const reducer = ( state: StateType, action: ActionType ): StateType  => { // ф=ция в которую поступает state (переключалка) и action (инструкция, у которой должен біть тип\заголовок, что должен сделать редюсер) и которая по каким то правилам меняет стейт и его в конечном итоге выплевывает изменнній стейт
    switch (action.type) { //чаще всего используется несколько action и чтобі не делать много раз if\else исп-ем switch для разных сценариев
        case  TOGGLE_CONSTANT:
            return {
                ...state, // забери всеп св-ва что там были
                collapsed: !state.collapsed // и поменяй на противоположное св-во collapsed
            };
        default :
            throw new Error( 'Bad action type' )
    }

    // if (action.type === TOGGLE_CONSTANT){ // закоментили когда ввели switch для показания множественных сценариев
    // return !state;
    // }
    return state;
}