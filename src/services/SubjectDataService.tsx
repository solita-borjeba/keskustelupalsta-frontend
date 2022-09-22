import http from "../http-common";

class SubjectDataService {
    getAll() {
        return http.get("/getSubjects");
    }

    create(data: any) {
        return http.post("createSubject");
    }

    update(id: any, data: any) {
        return http.put("updateSubject");
    }

    delete(id: any) {
        return http.delete("deleteSubject");
    }

}

export default new SubjectDataService();