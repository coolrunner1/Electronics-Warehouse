import prisma from "../../prisma/prisma-client";
import {DbEnum} from "../types/DbEnum";

class EnumsService {
    async getReturnStatuses() {
        return prisma.$queryRawUnsafe<
            DbEnum[]
        >(`SELECT UNNEST(enum_range(NULL::return_status))`);
    }

    async getReturnReasons() {
        return prisma.$queryRawUnsafe<
            DbEnum[]
        >(`SELECT UNNEST(enum_range(NULL::return_reason))`);
    }

    async getOrderStatuses() {
        return prisma.$queryRawUnsafe<
            DbEnum[]
        >(`SELECT UNNEST(enum_range(NULL::order_status))`);
    }
}

export default new EnumsService();