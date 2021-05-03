import { SearchResultItem } from "../../../common/SearchResultItem";
import { Searchable } from "../../Core/Searchable";
import { FilePathLocationOpener } from "../../LocationOpeners/FilePathLocationOpener";
import { WindowsApplicationRetrieverResult } from "./WindowsApplicationRetrieverResult";

export class WindowsApplication implements Searchable {
    public static fromWindowsAppRetriever(app: WindowsApplicationRetrieverResult): WindowsApplication {
        return new WindowsApplication(app.BaseName, app.FullName, app.IconFilePath);
    }

    private constructor(
        public readonly name: string,
        public readonly filePath: string,
        public readonly iconFilePath: string
    ) {}

    public toSearchResultItem(): SearchResultItem {
        return {
            description: this.filePath,
            executionArgument: this.filePath,
            executorId: "FilePathExecutor",
            icon: this.iconFilePath,
            locationOpenerId: FilePathLocationOpener.locationOpenerId,
            name: this.name,
            openLocationArgument: this.filePath,
        };
    }
}