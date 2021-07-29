package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QNationwideLibraryInfo is a Querydsl query type for NationwideLibraryInfo
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QNationwideLibraryInfo extends EntityPathBase<NationwideLibraryInfo> {

    private static final long serialVersionUID = -822466161L;

    public static final QNationwideLibraryInfo nationwideLibraryInfo = new QNationwideLibraryInfo("nationwideLibraryInfo");

    public final StringPath cityName = createString("cityName");

    public final StringPath dataInputDay = createString("dataInputDay");

    public final StringPath latitude = createString("latitude");

    public final NumberPath<Long> libraryInfoId = createNumber("libraryInfoId", Long.class);

    public final StringPath libraryName = createString("libraryName");

    public final StringPath libraryType = createString("libraryType");

    public final NumberPath<Integer> loanableCount = createNumber("loanableCount", Integer.class);

    public final NumberPath<Integer> loanableDayTime = createNumber("loanableDayTime", Integer.class);

    public final StringPath longtitude = createString("longtitude");

    public final NumberPath<Long> numberOfBooks = createNumber("numberOfBooks", Long.class);

    public final NumberPath<Long> numberOfNotBooks = createNumber("numberOfNotBooks", Long.class);

    public final NumberPath<Long> numberOfPublications = createNumber("numberOfPublications", Long.class);

    public final NumberPath<Long> numberOfReadingSeats = createNumber("numberOfReadingSeats", Long.class);

    public final StringPath operationInstitution = createString("operationInstitution");

    public final StringPath phoneNumber = createString("phoneNumber");

    public final StringPath publicHolidayEndTime = createString("publicHolidayEndTime");

    public final StringPath publicHolidayStartTime = createString("publicHolidayStartTime");

    public final StringPath redDay = createString("redDay");

    public final StringPath roadAddress = createString("roadAddress");

    public final StringPath saturdayEndTime = createString("saturdayEndTime");

    public final StringPath saturdayStartTime = createString("saturdayStartTime");

    public final StringPath sigunguName = createString("sigunguName");

    public final StringPath website = createString("website");

    public final StringPath weekdayEndTime = createString("weekdayEndTime");

    public final StringPath weekdayStartTime = createString("weekdayStartTime");

    public QNationwideLibraryInfo(String variable) {
        super(NationwideLibraryInfo.class, forVariable(variable));
    }

    public QNationwideLibraryInfo(Path<? extends NationwideLibraryInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QNationwideLibraryInfo(PathMetadata metadata) {
        super(NationwideLibraryInfo.class, metadata);
    }

}

