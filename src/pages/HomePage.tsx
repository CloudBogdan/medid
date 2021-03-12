import React, { useContext, useState } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import { TodoItemsList } from "../components/Todo";
import Context from "../Context";
import Page from "./Page";

const HomePage: React.FC = ()=> {

    const filters = [
        { role: "all", title: "Все" },
        { role: "checked", title: "Завершённые" },
        { role: "unchecked", title: "Не завершённые" },
        { role: "favorite", title: "Важные" }
    ]
    const
        [active_filter, setActiveFilter] = useState<string>("all"),
        [search_filter, setSearchFilter] = useState<string | undefined>(undefined);
    const { todos } = useContext(Context);
    
    return (
        <Page>

            <Header
                title="Заметки"
                subtitle={ `Заметок: ${ todos.length }` }
                search_filter={ search_filter }
                setSearchFilter={ setSearchFilter }
            />
            <Filter active_filter={ active_filter } setActiveFilter={ setActiveFilter } filters={ filters } />

            <TodoItemsList
                filter_by={ active_filter as any }
                search_by={ search_filter }
                todos={ todos }
            />

        </Page>
    );
};

export default HomePage;