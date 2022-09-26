import http from "./http-common";


class SubjectDataService {
    getAll() {
        // Fetch subjects
        return http.get("getSubjects");
    }

    create(data: any) {
        return http.post("createSubject", data);
    }

    update(id: any, data: any) {
        return http.put("updateSubject/" + id, data);
    }

    delete(id: any) {
        return http.delete("deleteSubject/" + id);
    }

}

export default new SubjectDataService();